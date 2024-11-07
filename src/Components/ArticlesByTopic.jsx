import { useState, useEffect } from "react"
import { getArticles } from "../api"
import ArticleCard from "./ArticleCard"

const ArticlesByTopic = ({topic}) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
        })
    }, [])

    console.log(topic)



}

export default ArticlesByTopic