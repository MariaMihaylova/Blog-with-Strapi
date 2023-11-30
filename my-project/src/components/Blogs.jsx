import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Blogs = ({blogs}) => {

    //   const blogs1 = [
    //     {
    //         "id":1,
    //         'title':"Blog 1",
    //         'description':"Description description description",
    //         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricie",
    //         "author":{"name":"Jane Doe","email":"jane@gmail.com", "authorIMG":"https://static.vecteezy.com/ti/vecteur-libre/p3/2275818-avatar-femme-icone-profil-femme-pour-reseau-vectoriel.jpg" },
    //         'coverImage': "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/12/Book-cover-design-trends-2023.jpeg?auto=format&q=60&w=1860&h=1395&fit=crop&crop=faces"
    //     },
    //     {
    //         "id":2,
    //         'title':"Blog 2",
    //         'description':"Description description description",
    //         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricie",
    //         "author":{"name":"Jane Doe","email":"jane@gmail.com", "authorIMG":"https://static.vecteezy.com/ti/vecteur-libre/p3/2275818-avatar-femme-icone-profil-femme-pour-reseau-vectoriel.jpg" },
    //         'coverImage': "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/12/Book-cover-design-trends-2023.jpeg?auto=format&q=60&w=1860&h=1395&fit=crop&crop=faces"
    //     },
    //     {
    //         "id":3,
    //         'title':"Blog 3",
    //         "author":{"name":"Jane Doe","email":"jane@gmail.com", "authorIMG":"https://static.vecteezy.com/ti/vecteur-libre/p3/2275818-avatar-femme-icone-profil-femme-pour-reseau-vectoriel.jpg" },
    //         'description':"Description description description",
    //         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricie",
    //         'coverImage': "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/12/Book-cover-design-trends-2023.jpeg?auto=format&q=60&w=1860&h=1395&fit=crop&crop=faces"
    //     }

    // ]

  return (
    <div className="w-full bg-{#f9f9f9} py-[50px] ">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
                
                {/* {blogs.map((blog)=>
                <Link to={`/blog/${blog.id}`} key={blog.id} >
                 <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                        <img src={blog.coverImage}  className="h-56 w-full object-cover" key={blog.coverImage}/>
                        <div className="p-8">
                            <h3 className="font-bold text-2xl my-1" key={blog.title}> {blog.title}</h3>
                            <p className="text-grid-600 text-xl " key={blog.description}>{blog.description}</p>
                        </div>
                        </div>
                </Link>
                   
                )} */}

                {blogs.data.map((blog)=>
                <Link to={`/blog/${blog.id}`} key={blog.id} >
                 <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                        <img src={`http://localhost:1337${blog.attributes.blogCoverImage.data.attributes.url}`}  className="h-56 w-full object-cover" key={blog.coverImage}/>
                        <div className="p-8">
                            <h3 className="font-bold text-2xl my-1" key={blog.title}> {blog.attributes.blogTitle}</h3>
                            <p className="text-grid-600 text-xl " key={blog.description}> by {blog.attributes.blogAuthor}</p>
                        </div>
                        </div>
                </Link>
                   
                )}  
                
               
            </div>
        </div>
    </div>
  )
}

export default Blogs