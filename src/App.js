import DashBoard, { Dash } from "./components/Dash";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Grid } from "@mui/material";
import { configStore } from "./components/state/configStore";
import { Provider } from "react-redux";
import { LineChart } from "./components/LineChart";
import { Calender } from "./components/Calender";

function App() {
  const mystore = configStore();
  return (
    <Provider store={mystore}>
      <div className="App">
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/dash" element={<Dash />} />
            <Route path="/form" element={<Form />} />
            <Route path="/table" element={<Table />} />
            <Route path="/line" element={<LineChart />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
