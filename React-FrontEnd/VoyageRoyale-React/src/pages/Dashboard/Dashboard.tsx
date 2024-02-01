import { Route, Routes } from "react-router";
import { Grid } from "@mui/material";
import Homepage from "../Homepage/Homepage";
import CarList from "../CarList/CarList";
import Location from "../Location/Location";
import UserProfile from "../UserProfile/UserProfile";
import UserReservations from "../UserReservations/UserReservations";
import SignInSignUp from "../SignInSignUp/SignInSignUp";
import CarDetails from "../CarDetails/CarDetails";
import Payment from "../Payment/Payment";
import Footer from "../../components/Footer/Footer";
import QuickReservation from "../QuickReservation/QuickReservation";
import AboutUs from "../AboutUs/AboutUs";
import AddBrand from "../../components/AdminComponents/BrandPanel/AddBrand";

import AddModel from "../../components/AdminComponents/ModelPanel/AddModel";
import AddCar from "../../components/AdminComponents/CarPanel/AddCar";
import AddFuelType from "../../components/AdminComponents/FuelTypePanel/AddFuelType";
import AddGearType from "../../components/AdminComponents/GearTypePanel/AddGearType";
import AddLocation from "../../components/AdminComponents/LocationPanel/AddLocation";
import CarFeatures from "../AdminPages/CarFeatures/CarFeatures";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddCarType from "../../components/AdminComponents/CarTypePanel/AddCarType";
import Users from "../AdminPages/Users/Users";
import Cars from "../AdminPages/Cars/Cars";
import Positions from "../AdminPages/Positions/Positions";
import Rentals from "../AdminPages/Rentals/Rentals";
import Invoices from "../AdminPages/Invoices/Invoices";

function Dashboard() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Sidebar
            isSignedIn={false}
            onSignOut={function (): void {
              throw new Error("Function not implemented.");
            }}
            userInfo={undefined}
            handleSignInSuccess={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} style={{ padding: 50 }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/details/:id" element={<CarDetails />} />
            <Route path="/location" element={<Location />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/quickReservation" element={<QuickReservation />} />
            <Route path="/signInSignUp" element={<SignInSignUp />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/reservations" element={<UserReservations />} />
            <Route
              path="/adminDashboard/carFeatures"
              element={<CarFeatures />}
            />
            <Route path="/adminDashboard/users" element={<Users />} />
            <Route path="/adminDashboard/cars" element={<Cars />} />
            <Route path="/adminDashboard/positions" element={<Positions />} />
            <Route path="/adminDashboard/rentals" element={<Rentals />} />
            <Route path="/adminDashboard/invoices" element={<Invoices />} />
            <Route
              path="/userProfile/reservation"
              element={<UserReservations />}
            />
            <Route path="/login" element={<SignInSignUp />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/brand/add" element={<AddBrand />} />
            <Route path="/carType/add" element={<AddCarType />} />
            <Route path="/model/add" element={<AddModel />} />
            <Route path="/car/add" element={<AddCar />} />
            <Route path="/fuel_types/add" element={<AddFuelType />} />
            <Route path="/gear_types/add" element={<AddGearType />} />
            <Route path="/locations/add" element={<AddLocation />} />
          </Routes>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
