import "../../css/styles.css";

export const CafeMenu = ({ coffee, ade, tea }) => {
  return (
    <>
      <div className="wrap">
        <h1>Cafe</h1>
        <ul>
          Coffee
          <li>
            {coffee[0].menuName} : {coffee[0].cost}
          </li>
          <li>
            {coffee[1].menuName} : {coffee[1].cost}
          </li>
          <li>
            {coffee[2].menuName} : {coffee[2].cost}
          </li>
          <li>
            {coffee[3].menuName} : {coffee[3].cost}
          </li>
          <li>
            {coffee[4].menuName} : {coffee[4].cost}
          </li>
        </ul>
        <ul>
          Ade
          <li>
            {ade[0].menuName} : {ade[0].cost}
          </li>
          <li>
            {ade[1].menuName} : {ade[1].cost}
          </li>
          <li>
            {ade[2].menuName} : {ade[2].cost}
          </li>
        </ul>
        <ul>
          Tea
          <li>
            {tea[0].menuName} : {tea[0].cost}
          </li>
          <li>
            {tea[1].menuName} : {tea[1].cost}
          </li>
        </ul>
      </div>
    </>
  );
};
