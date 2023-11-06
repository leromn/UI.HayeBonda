import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductTemp from "./productTemp";
import MainTab from "./maintab";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [value, setValue] = React.useState("1");
  const [name, setName] = React.useState("1");
  const [desc, setDesc] = React.useState("1");
  const [price, setPrice] = React.useState(0);
  const [thumb, setThumb] = React.useState();
  const [products, setProducts] = useState([]);

  //scrolling phase
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://zkls2z-8003.csb.app/home/popular?page=${page}`
      );
      const newData = response.data.products;
      setProducts((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  ////////////////////////////////////
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("scrolled to bottom");
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scrolling phase end

  // const getPictures = async () => {
  //   console.log("fetching products");
  //   await axios
  //     .get("https://zkls2z-8001.csb.app/home/popular") ///
  //     .then((resp) => {
  //       setProducts(resp.data.products);
  //       console.log(resp.data.products);
  //     });
  // };
  // useEffect(() => {
  //   getPictures();
  // }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="trending" value="1" />
            <Tab label="new" value="2" />
            <Tab label="all" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {products.map((product) => {
            return (
              <ProductTemp
                name={product.productName}
                desc={product.productDescription}
                price={product.price}
                thumb={product.thumbnail.imageData.data}
              />
            );
          })}
        </TabPanel>
        <TabPanel value="2">
          <ProductTemp />
        </TabPanel>
        <TabPanel value="3">
          <MainTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
