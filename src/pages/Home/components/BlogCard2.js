
import Card from 'react-bootstrap/Card';


const BlogCard2 = ({ data }) => {
  return (
    <>
      <Card className="bg-amber-200 text-Black hover:-translate-y-6" style = {{height:302 , width:265 ,backgroundColor:"rgb(246, 235, 228)"}}>
      
      <Card.ImgOverlay className = " items-center " style = {{marginLeft:30,marginTop:"25%",alignContent:"center" ,alignItem:"center"}}>
        <Card.Title className = "font-bold text-3xl"> BigBros</Card.Title>
        <Card.Text className="font-serif font-bold text-xl">
          {data.short}
        </Card.Text>
        <Card.Text className = " hover:text-black" style = {{color:"rgb(246, 235, 228)"}}>
            
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
    </>
  );
};
export default BlogCard2;
