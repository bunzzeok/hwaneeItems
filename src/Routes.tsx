import { useEffect, useState } from "react";
import {
  Routes as Switch,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Landing from "@/pages/Landing/Landing";

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} element={<Landing />} />
    </Switch>
  );
};
