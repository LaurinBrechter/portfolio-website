

export const Blog = (props: {blogContent: any}) => {


    return (
        <article className="flex items-center justify-center overflow-y-auto py-20" >
            <div className="flex flex-col w-[600px] gap-4 h-full">
                {props.blogContent}
            </div>
        </article>
    )

}



    