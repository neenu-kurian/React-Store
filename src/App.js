import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import NotFound from "./containers/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  shadows: ["none"],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route path="/product/:productId" exact element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
