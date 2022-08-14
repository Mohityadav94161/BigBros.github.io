
import Card from "react-bootstrap/Card";
import Heart from "@mui/icons-material/FavoriteBorder";

const BlogCard = ({ data }) => {
  return (
    <>
      <Card
        className="bg-dark text-white \"
        style={{ height: 302, width: 302 }}
      >
        <Card.Img
        className = "opacity-50"
          style={{ height: 302, width: 302 }}
          src={data.img}
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Text>SHAMYUKTHA THILLAIVELAN </Card.Text>
          <Card.Text>Feb 26 . 4 min</Card.Text>

          <Card.Text className="mt-14 mb-2 text-yellow-600 font-bold">
            Technology
          </Card.Text>
          <Card.Text className="  text-xl">
            The Novel NFT Content Platform is Heading to Polygon{" "}
          </Card.Text>
          <Card.Text>________________________________________</Card.Text>
          <Heart className = " text-red-500 text-xl h-6 w-6 "/>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
export default BlogCard;
