import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, MapPin, Package, User } from "lucide-react";

function BillingPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  
  // Cart data state
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 5.99,
    tax: 0,
    total: 0
  });
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  // RapidAPI GeoDB Cities API credentials
  const geoDBOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  // Load cart data from localStorage
  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      const { items, quantities } = JSON.parse(savedCartData);
      setCart(items);
      setQuantities(quantities);
    }
  }, []);

  // Calculate order summary whenever cart or quantities change
  useEffect(() => {
    const calculateOrderSummary = () => {
      // Calculate subtotal
      const subtotal = cart.reduce((total, item) => {
        return total + (item.price * (quantities[item.id] || 1));
      }, 0);
      
      // Calculate tax (assuming 8% tax rate)
      const taxRate = 0.08;
      const tax = subtotal * taxRate;
      
      // Fixed shipping cost
      const shipping = subtotal > 0 ? 5.99 : 0;
      
      // Calculate total
      const total = subtotal + tax + shipping;
      
      setOrderSummary({
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
      });
    };
    
    calculateOrderSummary();
  }, [cart, quantities]);

  // Fetch countries when component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoadingCountries(true);
        
        // Using GeoDB Cities API for countries
        const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=200', geoDBOptions);
        
        if (!response.ok) throw new Error('Failed to fetch countries');
        const data = await response.json();
        
        // Process the API response
        const processedCountries = data.data.map(country => ({
          code: country.code,
          name: country.name
        })).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
        
        setCountries(processedCountries);
        setIsLoadingCountries(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        // Fallback to some default countries if API fails
        setCountries([
          { code: "US", name: "United States" },
          { code: "CA", name: "Canada" },
          { code: "GB", name: "United Kingdom" },
          { code: "AU", name: "Australia" },
          { code: "NG", name: "Nigeria" }
        ]);
        setIsLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  // Fetch states/regions when country changes
  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country) {
        setStates([]);
        return;
      }
      
      try {
        setIsLoadingStates(true);
        
        // Using GeoDB Cities API for regions/states of the selected country
        const response = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${formData.country}/regions?limit=100`,
          geoDBOptions
        );
        
        if (!response.ok) throw new Error('Failed to fetch states/provinces');
        const data = await response.json();
        
        // Process the API response
        const processedStates = data.data.map(region => ({
          code: region.isoCode || region.wikiDataId,
          name: region.name
        })).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
        
        setStates(processedStates);
        setIsLoadingStates(false);
      } catch (error) {
        console.error("Error fetching states/provinces:", error);
        
        // For demonstration purposes, fallback to some hardcoded states if API fails
        const fallbackStates = {
          "US": [
            { code: "AL", name: "Alabama" },
            { code: "AK", name: "Alaska" },
            { code: "AZ", name: "Arizona" },
            { code: "CA", name: "California" },
            { code: "CO", name: "Colorado" },
            { code: "NY", name: "New York" },
            { code: "TX", name: "Texas" }
          ],
          "CA": [
            { code: "AB", name: "Alberta" },
            { code: "BC", name: "British Columbia" },
            { code: "ON", name: "Ontario" },
            { code: "QC", name: "Quebec" }
          ],
          "GB": [
            { code: "ENG", name: "England" },
            { code: "SCT", name: "Scotland" },
            { code: "WLS", name: "Wales" },
            { code: "NIR", name: "Northern Ireland" }
          ],
          "AU": [
            { code: "NSW", name: "New South Wales" },
            { code: "QLD", name: "Queensland" },
            { code: "VIC", name: "Victoria" }
          ],
          "NG": [
            { code: "LA", name: "Lagos" },
            { code: "FC", name: "Abuja" },
            { code: "KN", name: "Kano" }
          ]
        };
        
        setStates(fallbackStates[formData.country] || []);
        setIsLoadingStates(false);
      }
    };

    fetchStates();
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // If country changes, reset state
    if (name === 'country') {
      setFormData({
        ...formData,
        [name]: value,
        state: ""
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (formData.firstName.length < 2) formErrors.firstName = "First name must be at least 2 characters.";
    if (formData.lastName.length < 2) formErrors.lastName = "Last name must be at least 2 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Please enter a valid email address.";
    if (formData.phone.length < 10) formErrors.phone = "Please enter a valid phone number.";
    if (formData.address1.length < 5) formErrors.address1 = "Address must be at least 5 characters.";
    if (formData.city.length < 2) formErrors.city = "City must be at least 2 characters.";
    if (formData.state.length < 1) formErrors.state = "Please select a state/province.";
    if (formData.postalCode.length < 5) formErrors.postalCode = "Please enter a valid postal code.";
    if (formData.country.length < 1) formErrors.country = "Please select a country.";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // Save order details to localStorage
        localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
        localStorage.setItem("billingInfo", JSON.stringify(formData));
        
        console.log("Form Data:", formData);
        console.log("Order Summary:", orderSummary);
        
        setIsSubmitting(false);
        navigate("/checkout/payment");
      }, 1500);
    }
  };

  return (
    <div className="container">
      <div className="billing-layout">
        <div className="billing-form-container">
          <div className="page-header">
            <h1 className="page-title">Billing Information</h1>
            <p className="page-subtitle">Please enter your billing details</p>
          </div>

          <form onSubmit={handleSubmit} className="billing-form">
            <div className="card">
              <div className="card-header">
                <div className="header-with-icon">
                  <User className="icon" />
                  <h3 className="card-title">Personal Information</h3>
                </div>
              </div>
              <div className="card-content">
                <div className="form-row">
                  <div className="form-item">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Input first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="input"
                    />
                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                  </div>
                  <div className="form-item">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Input surname"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="input"
                    />
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Input Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                  <div className="form-item">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Input phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                    />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="header-with-icon">
                  <MapPin className="icon" />
                  <h3 className="card-title">Billing Address</h3>
                </div>
              </div>
              <div className="card-content">
                <div className="form-item">
                  <label htmlFor="address1">Address Line 1</label>
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    placeholder="Input your Address"
                    value={formData.address1}
                    onChange={handleChange}
                    className="input"
                  />
                  {errors.address1 && <p className="error-message">{errors.address1}</p>}
                </div>
                <div className="form-item">
                  <label htmlFor="address2">Address Line 2 (Optional)</label>
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    placeholder="Input your Address"
                    value={formData.address2}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="New York"
                      value={formData.city}
                      onChange={handleChange}
                      className="input"
                    />
                    {errors.city && <p className="error-message">{errors.city}</p>}
                  </div>
                  <div className="form-item">
                    <label htmlFor="country">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="select"
                      disabled={isLoadingCountries}
                    >
                      <option value="">Select country</option>
                      {countries.map(country => (
                        <option 
                          key={country.code} 
                          value={country.code}
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    {errors.country && <p className="error-message">{errors.country}</p>}
                    {isLoadingCountries && 
                      <p className="info-message">Loading countries...</p>
                    }
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label htmlFor="state">State/Province</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="select"
                      disabled={!formData.country || isLoadingStates}
                    >
                      <option value="">Select state/province</option>
                      {states.map(state => (
                        <option 
                          key={state.code} 
                          value={state.code}
                        >
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {errors.state && <p className="error-message">{errors.state}</p>}
                    {isLoadingStates && 
                      <p className="info-message">Loading states/provinces...</p>
                    }
                    {!isLoadingStates && formData.country && states.length === 0 && 
                      <p className="info-message">No states/provinces available for selected country</p>
                    }
                  </div>
                  <div className="form-item">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      placeholder="10001"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="input"
                    />
                    {errors.postalCode && <p className="error-message">{errors.postalCode}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="button-container">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting || isLoadingCountries || isLoadingStates}
              >
                {isSubmitting ? "Processing..." : "Continue to Payment"}
              </button>
            </div>
          </form>
        </div>

        <div className="order-summary-container">
          <div className="card">
            <div className="card-header">
              <div className="header-with-icon">
                <Package className="icon" />
                <h3 className="card-title">Order Summary</h3>
              </div>
            </div>
            <div className="card-content">
              {cart.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div className="summary-item" key={item.id}>
                      <span className="item-label">{item.name} (x{quantities[item.id] || 1})</span>
                      <span className="item-value">£{(item.price * (quantities[item.id] || 1)).toFixed(2)}</span>
                    </div>
                  ))}
                  <hr className="separator" />
                  <div className="summary-item">
                    <span className="item-label">Subtotal</span>
                    <span className="item-value">£{orderSummary.subtotal}</span>
                  </div>
                  <div className="summary-item">
                    <span className="item-label">Shipping</span>
                    <span className="item-value">£{orderSummary.shipping}</span>
                  </div>
                  <div className="summary-item">
                    <span className="item-label">Tax</span>
                    <span className="item-value">£{orderSummary.tax}</span>
                  </div>
                  <hr className="separator" />
                  <div className="summary-item total">
                    <span className="total-label">Total</span>
                    <span className="total-value">£{orderSummary.total}</span>
                  </div>
                </>
              )}
            </div>
            <div className="card-footer">
              <div className="secure-payment">
                <div className="secure-header">
                  <CreditCard className="icon-small" />
                  <span>Secure payment processing</span>
                </div>
                <p className="secure-text">Your payment information will be processed securely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;