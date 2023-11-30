import { useParams } from "react-router-dom";
import ReactMarkdown  from 'react-markdown';

const BlogContent = ({blogs}) => {
    const {id} = useParams()// ID fetched from the URL

    let blog = {}
    if(blog){
        
        let arr = blogs.data.filter(blog=> blog.id == id)
        blog = arr[0]
    }else{
        blog={}
    }

    console.log(blog)


    // const blogs=[
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
    <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
            
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 mdmt-20 ss::pt-20 text-black">
                <div className="col-span-2 ">
                    <img src={`http://localhost:1337${blog.attributes.blogCoverImage.data.attributes.url}`} className="h-56 w-full object-cover" />
                    <h1 className="font-bold text-2xl my-1 pt-5" >{blog.attributes.blogTitle}</h1>
                    <div className="pt-5"><ReactMarkdown>{blog.attributes.blogContent}</ReactMarkdown></div>
                </div>

                <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
                    <div>
                        <img src={`http://localhost:1337${blog.attributes.blogAuthorImage.data.attributes.url}`} className="p-2 w-32 h-32 rounded-full mx-auto object-cover"/>
                        <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{blog.attributes.blogAuthor}</h1>
                        <p className="text-center text-grey-900 font-midium"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>



  )
}

export default BlogContent