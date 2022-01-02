import Card from "../components/Card";
import classes from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      <ul style={{ display: "flex" }}>
        {props.data.map((e, i) => <Card key={i + 1} info={e} />)}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
