/* eslint-disable jsx-a11y/anchor-is-valid */
import divider from "../assets/img/divider.png";
import blogimg from "../assets/img/blogimg.jpg";

function Blog(){
    return(
        <div className="px-3">
        
        <h4 className="our-blog-heading mb-4">BLOGS</h4>
        <div className="blog row">
            <div className="col-4">
                <div className="blog-card">
                    <h6 className="blog-heading">HEADING</h6>
                    <h6 className="blog-date">DATE: 21-04-2021</h6>
                    <img src={blogimg} className="blog-img mt-3" alt="blog-1"/>
                    <p className="blog-summary mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque nunc vel risus rhoncus, a sagittis dolor fermentum. Sed feugiat viverra libero sed semper. Nunc mauris lectus, auctor at vestibulum nec, dictum nec nunc. Nullam sit amet sapien mollis, rhoncus nunc in, hendrerit nulla. Etiam risus lacus, aliquet a pulvinar eu, pretium in velit. Quisque at tristique odio. Sed iaculis est neque, sed volutpat orci commodo vel. Aliquam erat volutpat. Etiam dignissim felis venenatis velit suscipit, non suscipit neque iaculis</p>
                    <h6 className="blog-tags">#tags</h6>
                    <div className="blog-brown1" />
                    <div className="blog-brown2" />
                </div>
            </div>
            <div className="col-4">
                <div className="blog-card">
                    <h6 className="blog-heading">HEADING</h6>
                    <h6 className="blog-date">DATE: 21-04-2021</h6>
                    <img src={blogimg} className="blog-img mt-3" alt="blog-2"/>
                    <p className="blog-summary mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque nunc vel risus rhoncus, a sagittis dolor fermentum. Sed feugiat viverra libero sed semper. Nunc mauris lectus, auctor at vestibulum nec, dictum nec nunc. Nullam sit amet sapien mollis, rhoncus nunc in, hendrerit nulla. Etiam risus lacus, aliquet a pulvinar eu, pretium in velit. Quisque at tristique odio. Sed iaculis est neque, sed volutpat orci commodo vel. Aliquam erat volutpat. Etiam dignissim felis venenatis velit suscipit, non suscipit neque iaculis</p>
                    <h6 className="blog-tags">#tags</h6>
                    <div className="blog-brown1" />
                    <div className="blog-brown2" />
                </div>
            </div>
            <div className="col-4">
                <div className="blog-card">
                    <h6 className="blog-heading">HEADING</h6>
                    <h6 className="blog-date">DATE: 21-04-2021</h6>
                    <img src={blogimg} className="blog-img mt-3" alt="blog-3"/>
                    <p className="blog-summary mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque nunc vel risus rhoncus, a sagittis dolor fermentum. Sed feugiat viverra libero sed semper. Nunc mauris lectus, auctor at vestibulum nec, dictum nec nunc. Nullam sit amet sapien mollis, rhoncus nunc in, hendrerit nulla. Etiam risus lacus, aliquet a pulvinar eu, pretium in velit. Quisque at tristique odio. Sed iaculis est neque, sed volutpat orci commodo vel. Aliquam erat volutpat. Etiam dignissim felis venenatis velit suscipit, non suscipit neque iaculis</p>                
                    <h6 className="blog-tags">#tags</h6>
                    <div className="blog-brown1" />
                    <div className="blog-brown2" />
                    </div>
            </div>
        </div>
        <div className="row justify-content-center mt-3 mb-2">
            <div className="col-4">
                <center>
                <button className="button">
                    Show More
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                </button>
                </center>
            </div>
        </div>
        <div className="container-fluid text-center mt-5">
            <img src={divider} alt="divider-2" width="40%" />
        </div>
        <br />
        <br />
        </div>
    );
}

export default Blog;