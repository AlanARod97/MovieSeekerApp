const API = "https://api.themoviedb.org/3"


export default function get(path){
    return(
        fetch(API + path, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjYwMjBmYTNiZDAyYjk4YmViNWNiYzIwYzY5MmNiZiIsInN1YiI6IjY0MWYxZGExMDhjZjg3MDBkZWZkY2U5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hm0aq9_TDEdlNf9_dclqS3GVlZZ0KH5d3V1HtOHlzMI",
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then(result => result.json())
    )
}