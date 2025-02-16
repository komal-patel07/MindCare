import BoyImg from "@/assets/Layer.svg";
import depression from "@/assets/Triggers-And-Mental-Illness.jpg";
import PersonalityDesorder from "@/assets/person-suffering-from-ptsd.jpg";
import anxiety from "@/assets/young-man-hoodie-leaning-face-hand-looking-tired-front-view.jpg";
import Button from "@/Component/UI/Button";
import yoo_one from "@/assets/yoo-one.jpg";
import beard_one from "@/assets/beard-one.jpg";
import hat_one from "@/assets/hat-one.jpg";
import { Phone, Users, Pill, User,Brain ,Leaf } from "lucide-react";
import { FaChild } from "react-icons/fa";
import LadyImage from "@/assets/image-Photoroom.png";
import Service from "@/Component/UI/Service";
import Two_home from "@/assets/doctor-examining-chest-patient.jpg";
import "@/App.css"; // Import your CSS file
// import FeedbackCart from "@/Component/UI/FeedbackCart";
import FeedbackCart from "@/Component/UI/FeedbackCart";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/Component/UI/Card";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  buttonVariants,
} from "@/Component/Animation/HomePageAnimation";

// Data for the bar chart
const data = [
  { category: "Time", Week1: 2, Goal: 6 },
  { category: "Food", Week1: 3, Goal: 7 },
  { category: "Walk", Week1: 4, Goal: 6 },
  { category: "Family", Week1: 5, Goal: 6 },
  { category: "Gym", Week1: 2, Goal: 4 },
  { category: "Sleep", Week1: 4, Goal: 5 },
];

export default function HomePage() {
  return (
    <div className="px-5 md:px-10 lg:px-20">
      {/* first Section  */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row items-center lg:items-start"
      >
        <div className="text-center lg:text-left my-10 lg:my-30 px-5 lg:px-20 py-10">
          <div>
            <p className="border border-zinc-200 shadow-2xs w-max mx-auto lg:mx-0 text-center rounded-2xl px-4 py-1">
              😢 Depressed?
            </p>
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl w-full lg:w-180 py-5"
          >
            There's No One Face to Mental Health Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="py-7 text-gray-500 text-sm md:text-base"
          >
            At Mental care, there's no one-size-fits-all approach to mental
            health.
            <br />
            We tailor our care plan to fit each person's unique needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col md:flex-row items-center md:items-start py-3"
          >
            <div className="mb-3 md:mb-0">
              <motion.div
                className="w-55"
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button text="Find a Provider" />
              </motion.div>
            </div>
            <div className="md:ml-10 flex items-center">
              <Phone className="mr-2" />
              <span className="text-lg">(704) 555-0127</span>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={BoyImg}
            width={500}
            className="max-w-sm md:max-w-md lg:max-w-lg py-7"
            alt="Mental Health Illustration"
          />
        </motion.div>
      </motion.div>

      {/* Conditions Section */}
      <div className="px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
          <h1 className="text-2xl md:text-5xl w-full md:w-2/3">
            We help people living with a variety of mental health conditions
          </h1>
          <p className="border border-zinc-200 h-10 text-center py-2 text-zinc-500 rounded w-max px-4 mt-3 md:mt-0">
            All Conditions
          </p>
        </div>
      </div>

      {/* Second Section: Conditions Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto py-12"
      >
        <div className="flex flex-col md:flex-row justify-around py-20 gap-10">
          {[
            {
              image: PersonalityDesorder,
              title: "Personality Disorders",
              description:
                "Personality disorders are a group of mental illnesses.",
            },
            {
              image: depression,
              title: "Depression",
              description:
                "Depression is a common and serious medical illness that negatively.",
            },
            {
              image: anxiety,
              title: "Anxiety",
              description:
                "Anxiety is the feeling of fear, dread, and uneasiness.",
            },
          ].map((condition, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3"
              variants={itemVariants}
            >
              <motion.img
                src={condition.image}
                className="w-full rounded-lg"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl py-3">{condition.title}</h1>
                <p className="py-3 h-20 w-70 text-center">
                  {condition.description}
                </p>
                <motion.div
                  className="w-55"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button text="View Condition" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Third Section: Services */}
        <motion.div
          className="flex justify-center py-10"
          variants={itemVariants}
        >
          <h1 className="text-2xl md:text-5xl w-250 text-center">
            Our extensive network of licensed clinicians offers a wide variety
            of services.
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                logo: <User className="size-11" />,
                title: "Individual Therapy",
                description:
                  "Couples therapy, sometimes referred to as marriage therapy or couples counseling, can help couples of all types recognize and resolve conflicts.",
              },
              {
                logo: <Users className="size-11" />,
                title: "Couples Therapy",
                description:
                  "Couples therapy, sometimes referred to as marriage therapy or couples counseling, can help couples of all types recognize and resolve conflicts.",
              },
              {
                logo: <FaChild className="size-11" />,
                title: "Child Therapy",
                description:
                  "Couples therapy, sometimes referred to as marriage therapy or couples counseling, can help couples of all types recognize and resolve conflicts.",
              },

              {
                logo: <Pill className="size-11" />,
                title: "Spravato Therapy",
                description:
                  "Spravato® esketamine intranasal is a prescription, FDA-approved nasal spray made up of the chemical esketamine.",
              },
              {
                logo: <Brain className="size-11" />,
                title: "Relaxation Therapy",
                description:
                  "Narrative therapy helps people become experts in their own lives by focusing on the stories and experiences they have lived.",
              },
              {
                logo: <Leaf className="size-11" />,
                title: "Sarvato Therapy",
                description:
                  "Narrative therapy helps people become experts in their own lives by focusing on the stories and experiences they have lived.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Service {...service} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="w-55 mt-10"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button text="View All Services" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Fourth Section: Doctor Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-gradient-to-bl my-10 from-rose-100 via-gray-100 to-gray-200">
        <div className="flex flex-col items-center md:items-start">
          <motion.p
            className="bg-white text-center text-black font-medium py-2 px-4 rounded mt-4 shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Dr. Schuessler
            <br />
            Psychotherapist
          </motion.p>
          <img
            src={LadyImage}
            alt="Dr. Schuessler"
            width={900}
            className="h-auto rounded"
          />
        </div>
        <div className="text-center md:text-left mt-10 md:mt-0 md:ml-10">
          <h1 className="text-4xl mb-5">
            How to get back to natural life after treated from mental health
            medicare
          </h1>
          <p className="text-gray-600 mb-5">
            Medicare patient care is paramount – the driving force in everything
            we do. LifeStance is committed to state-of-the-art clinical
            excellence.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-gray-700 list-disc pl-5">
            {[
              "Complete Daily Task",
              "Drinking Water",
              "Care of Time Management",
              "Quality Time with Family",
              "Healthy Food",
              "Gym Workout",
              "Daily Morning Walk",
              "Proper Sound Sleep",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-block"
          >
            <Button text="Contact Us" />
          </motion.div>
        </div>
      </div>

      {/* Fifth Section: Bar Chart */}
      <div className="flex flex-col md:flex-row justify-evenly items-center bg-white p-10">
        <div className="max-w-md mx-1 mb-10 md:mb-0">
          <h1 className="text-3xl mb-5">Measure the program wellness impact</h1>
          <p className="text-gray-600 mb-5">
            When behavioral health patients can choose between in-office and
            virtual appointments, they tend to have more continuity of care.
            This leads to better patient outcomes, which is what we are all
            about.
          </p>
          <p className="text-gray-600">
            We tailor our care plans to fit each person's unique needs. Our
            clinicians include psychiatrists, psychologists, and licensed
            therapists who are ready to support you.
          </p>
        </div>
        <div>
          <Card className="shadow-lg">
            <CardContent>
              <ResponsiveContainer width={400} height={300}>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Week1"
                    fill="#047857"
                    name="Week 1"
                    animationBegin={0}
                    animationDuration={1000}
                  />
                  <Bar
                    dataKey="Goal"
                    fill="#fda4af"
                    name="Goal"
                    animationBegin={200}
                    animationDuration={1000}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sixth Section: Image and Stats */}
      <div className="flex flex-col my-7 md:flex-row items-center gap-10 max-w-8xl p-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Two_home}
            alt="Dr. Schuessler"
            width={900}
            className="h-auto rounded"
          />
        </div>
        <div className="text-center mx-20 md:text-left">
          <h1 className="text-4xl py-5 mb-5">
            We provide mental health services when and where you need it.
          </h1>
          <p className="text-gray-600 py-2 mb-5">
            Medicare Promotes a Healthy and active lifestyle - no fanatical
            weight loss or perfect body ideals. Our goal is to teach patient to
            create happiness within.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 list-none gap-3 mb-5 text-gray-700 pl-5">
            {[
              { value: "31+", label: "States we serve" },
              { value: "4385+", label: "Highly trained clinicants" },
              { value: "500+", label: "Approximately centers" },
            ].map((stat, index) => (
              <li key={index} className="border-b-2 w-60 border-zinc-200 py-3">
                <h1 className="text-4xl py-3">{stat.value}</h1>
                {stat.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Seventh Section: Feedback */}
      <div className="flex flex-col md:flex-row gap-10 justify-center p-10">
        {[
          {
            img: yoo_one,
            name: "Sharlet skew",
            description:
              '"This is simply unbeliveable! Without it, we would have gone bankrupt by now.I did not even need training."',
            date: "01 January 2025",
          },
          {
            img: hat_one,
            name: "Geoffrey Mott",
            description:
              '"No matter where you go.It is the collest , most happening thing around! Not able to tell you how happy I am with it."',
            date: "03 January 2025",
          },
          {
            img: beard_one,
            name: "Geoffrey Mott",
            description:
              '"I had lost without it. It is incrediblr. It is the real deal! Since I invested in it I made over 100,000 dollar profits."',
            date: "05 February 2025",
          },
        ].map((feedback, index) => (
          <motion.div
            key={index}
            variants={buttonVariants}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-block"
          >
            <FeedbackCart {...feedback} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
