import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

   // This function fetches the data from the json file depending on the list item clicked by the user. The data is set
   // into the selectedOrderDetails and selectedOrderTimeStamps states. The id is basically the index value of the array
   // item selected
  function handleSelectItem(id) {
    const item = mockData.results[id].executionDetails
    const time = timestamps.results[id].timestamps

    setSelectedOrderDetails({
      buySellIndicator: item.buySellIndicator,
      orderStatus: item.orderStatus,
      orderType: item.orderType
    })

    setSelectedOrderTimeStamps({
      orderReceived: time.orderReceived,
      orderStatusUpdated: time.orderStatusUpdated,
      orderSubmitted: time.orderSubmitted
    })
  }

  return (
    <div>
      <div className={styles.header}>
        {/*Changed to the total number of orders using the results array in mock data json file.*/}
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${mockData.results.length} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        {/*added a search feature in the existing prop. Added three additional props to handle timestamps, to pass the
        chosen currency data and a function to set the selected items into the card view*/}
        <List rows={mockData.results.filter(value => value["&id"].toLowerCase().includes(searchText.toLowerCase()))}
              time={timestamps.results}
              selCurr={currency}
              selItem={handleSelectItem}/>
      </div>
    </div>
  );
};
export default Dashboard;
