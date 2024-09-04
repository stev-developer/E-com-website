import {React , useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MostPopular.css";
import { useGetProductsQuery } from "../../services/api";

function MostPopular() {
  const { data : products = [], error,isLoading } = useGetProductsQuery();
  
  useEffect(() => {
    if (products.length > 0) {
      console.log('Fetched products:', products);
    }
  }, [products]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>Error Loading products</div>;

  const validProducts = products.filter(product => product.name && product.price && product.imgSrc);

  return (
    <div className="Product-list">
      <p className="headerp">MOST POPULAR</p>
      <div className="body1">
      <Slider {...settings}>
        {validProducts.map((product) => (
          <div key={product.id} className="card">
            <div className="white">
              {product.sale === "true" && (
                <div className="sale-label">Sale</div>
              )}
              <img src={product.imgSrc} alt={product.alt || product.name} />
            </div>
            <p className="pro-name">{product.name}</p>
            <p className="pro-cost">{product.price}</p>
            <button className="pro-cart-btn">Add to Cart</button>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default MostPopular;
