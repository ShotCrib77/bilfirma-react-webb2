import React, { useState } from 'react';
import "../style/CategoryList.css"

const CategoryList = ({ itemArray }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [showMore, setShowMore] = useState(false);

  const visibleItemCount = 5;

  const handleCheckboxChange = (item) => { // Kopierar den tidigare arrayen för checkedItems och förändrar på den som klickas till "checked"/"unchecked"
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="checkbox-container">
      {/* Kommer först ta den mängd värden som "visibleItemCount" har från itemArray parametern ifall showMore är falskt (som den är när hemsidan laddas), annars kommer den ta alla värden från itemArray. Sedan så kommer de här värderna att matcha item och index som behövs för att react ska kunna, både rendera och hålla kåll på, t.ex onChange (vilket gör så att checkboxen blir "checkad/uncheckad") för varje checkbox. */}
      {itemArray.slice(0, showMore ? itemArray.length : visibleItemCount).map((item, index) => (
        <label key={index} className="checkbox-item">
          <input
            type="checkbox"
            checked={!!checkedItems[item]}
            onChange={() => handleCheckboxChange(item)}
          />
          {item}
        </label>
      ))}
      
      {itemArray.length > visibleItemCount && (
        <span onClick={toggleShowMore} className="show-more-button">
          {showMore ? <>{"\u25B2"} </> : <>{"\u25BC"}</>}
        </span>
      )}
    </div>
  );
};

export default CategoryList;
