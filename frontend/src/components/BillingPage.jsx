import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, MapPin, Package, User } from "lucide-react";

function BillingPage() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
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
        country: "NIG",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const validateForm = () => {
        let formErrors = {};
        if (formData.firstName.length < 2) formErrors.firstName = "First name must be more than 2 characters.";
        if (formData.lastName.length < 2) formErrors.last = "Last name must be more than 2 characters.";
        if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.phone = "Please enter a valid email address.";
        if (formData.phone.length < 10) formErrors.phone = "please enter a valid phone number.";
        if (formData.address1.length < 5) formErrors.address1 = "Address must be at least 5 characters.";
        if (formData.address2.length < 5) formErrors.address2 = "Address must be at least 5 characters.";
        if (formData.city.length < 2) formErrors.city = "City must be at least 2 characters.";
        if (formData.state.length < 2) formErrors.state = "please select a state/province.";
        if (formData.postalCode.length < 5) formErrors.postalCode = "Please enter a valid postal code.";
        if (formData.country.length , 2) formErrors.country = "Please select a country.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);

            //pass API call
            setTimeout(() => {
                console.log(formData);
                setIsSubmitting(false);
                navigate("/checkout/payment");
            }, 1500);
        }
    }

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
                                    <user className="icon" />
                                    <h3 className="card-title">Personal Information</h3> 
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="form-row">
                                    <div className="form-item">
                                        <label htmlFor="firstName">First Name</label>
                                        <input 
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Input your First Name"
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
                                            placeholder="Input your Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="input"
                                        />
                                        {errors.lastName && <p className="error-messsage">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="for-item">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Input your email"
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
                                            placeholder="input your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input"
                                        />
                                        {errors.phone &&  <p className="error-message">{errors.phone}</p>}
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
                                <div className="card-content">
                                    <div className="form-item">
                                        <label htmlFor="address1">Address Line 1</label>
                                        <input
                                            id="address1"
                                            name="address1"
                                            type="text"
                                            placeholder="Home Address"
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
                                            placeholder="Input your address"
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
                                                placeholder="Your city"
                                                type="text"
                                                value={formData.city}
                                                onChange={handleChange}
                                            />
                                            {errors.city && <p className="error-message">{errors.city}</p>}
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="state">State/Province</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BillingPage;