import React from "react";
import "./SearchItem.css";
import MaterialIcon from "material-icons-react";

/*
 * This component renders the searched items and the favorited items.
 */

const htmlDecode = rawHTML => {
  let e = document.createElement("div");
  e.innerHTML = rawHTML;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

/*
 * Function to handle the star color.
 * Param: key is used to force the DOM to re-render the star color due to the icon being SVG and react is unable to
 * re-render the changes in SVG without outside libraries.
 */
const handleStarColor = favorited => {
  if (favorited) {
    console.log("TRUE", favorited);
    return <MaterialIcon key={Math.random()} icon="star" color="#0B7712" />;
  } else {
    console.log("FALSE", favorited);
    return <MaterialIcon key={Math.random()} icon="star" color="#818181" />;
  }
};

const SearchItem = props => {
  return (
    <div className="waste_container">
      <div>
        <button onClick={() => props.favButton(props.wasteArray)}>
          {handleStarColor(props.wasteArray.favoritedInSearch)}
        </button>
      </div>
      <div>
        <p>{props.wasteArray.title}</p>
      </div>

      <div className="spacer" />
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: htmlDecode(props.wasteArray.body) }}
      />
    </div>
  );
};

export default SearchItem;
