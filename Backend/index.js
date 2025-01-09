const User = require('./user');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3100;
const bodyParser= require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Import routes for user,appointment management and testimonial
const Testimonial = require('./testimonial');
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/user', {

}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

//user registration
app.post('/', async(req, res) => {
    const receivedData = req.body;
    console.log(receivedData);
   
        const { Fullname,Email,DOB,Gen,un,ps } = req.body;
        
        const user = new User(req.body);
        try {
          await user.save();
          res.status(201).send(User);
        } catch (error) {
          res.status(400).send(error);
        }
      });

      //user login
app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        console.log(username);
        console.log(password);
        try {



          let answer = await User.find({ un: username , ps: password })
          console.log(answer)
    
          if(answer.length != 0){
            console.log("success")
            res.sendStatus(200)
          } else{
           console.log("fail")
           res.sendStatus(404)
          }
  
        } catch (e) {
            res.send("Something Went Wrong");
        }
      });

  //Chatbot Interaction
    app.post('/HomePage', async (req, res) => {
      const { Message,Input } = req.body;
    
      try {
        const response = await axios.post('http://127.0.0.1:5000/process' , {
          message: Message,
          input: Input,
        }); // Assuming Flask runs on port 5000
        console.log(response.data);
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
      }
     
    });


    // Testimonial Management
app.get('/testimonials', async (req, res) => {
  try {
      const testimonials = await Testimonial.find();
      res.json(testimonials);
  } catch (error) {
      console.error('Error fetching testimonials:', error);
      res.status(500).send('Error fetching testimonials');
  }
});

app.post('/testimonials', async (req, res) => {
  const { name, feedback, image } = req.body;

  const newTestimonial = new Testimonial({ name, feedback, image });

  try {
      await newTestimonial.save();
      res.status(201).send('Testimonial added successfully');
  } catch (error) {
      console.error('Error adding testimonial:', error);
      res.status(500).send('Error adding testimonial');
  }
});

app.delete('/testimonials/:id', async (req, res) => {
  try {
      await Testimonial.findByIdAndDelete(req.params.id);
      res.send('Testimonial deleted successfully');
  } catch (error) {
      console.error('Error deleting testimonial:', error);
      res.status(500).send('Error deleting testimonial');
  }
});

// Use routes for user and appointment management
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);   
});
