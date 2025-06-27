import styles from "./Card.module.css"




export const Card = (props) => {
   
    const {title, description, imageUrl} = props
    return (
      <div className={styles.card}> 
      <img src="https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png" alt="React" />
        <h1>React {title}!</h1>
        <p>Aprendendo React{description}!</p>
      </div>
    )
  }
