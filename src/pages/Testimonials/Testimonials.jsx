import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      feedback:
        "HealthBot has made managing my health so easy! The AI-powered diagnosis and appointment scheduling are super accurate.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sarah Lee",
      feedback:
        "I love how simple it is to track my health progress with HealthBot. The reports feature is a game-changer!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Mark Evans",
      feedback:
        "The chatbot's ability to diagnose symptoms quickly and effectively saved me a trip to the doctor. Highly recommend!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Emily Taylor",
      feedback:
        "HealthBot is so intuitive and easy to use. I even upgraded to the premium plan for unlimited chat history!",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1.5rem" }}>
        What Our Users Are Saying
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1f1f1f",
              padding: "1.5rem",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "300px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>
              {testimonial.name}
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
              "{testimonial.feedback}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
