import { useState, useEffect } from "react"
import { getArticles } from "../api"
import ArticleCard from "./ArticleCard"

const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
        })
    }, [])

    return (
        <>
        <h1>List of all articles: </h1>
        <ul className="flex-container">
            {articles.map((article, index) => {
                return (
                    <ArticleCard key={index} article={article}/>
                )
            })}
        </ul>
        </>
    )
}

export default Articles