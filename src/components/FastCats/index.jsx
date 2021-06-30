import React, { useEffect, useState } from "react";
import List from "react-virtualized/dist/commonjs/List";
import catImage from "../../images/cat.jpeg";

const createAnArray = (LIMIT) => {
  const array = [];
  for (let index = 1; index < LIMIT + 1; index++) {
    array.push(index);
  }
  return array;
};

const FastCats = () => {
  const [indexes, setIndexes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIndexes(createAnArray(50000));
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [indexes]);

  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    console.log(`Котик №`, index);
    // return (
    //   <div key={key} style={style}>
    //     <img src={catImage} alt={`Котик ${index}`} />
    //   </div>
    // );
    return <div key={index}>Котик № {index}</div>;
  };

  if (loading) return <div>Первоначальная подготовка массива данных...</div>;

  return (
    <List
      width={1535}
      height={679}
      rowCount={indexes.length}
      rowHeight={400}
      rowRenderer={rowRenderer}
    />
  );
};

export default FastCats;
