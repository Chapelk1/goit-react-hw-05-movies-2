import { List, ListItem, Title, Descr } from './ReviewsList.styled';


export default function ReviewsList({ reviews }) {
   

    return (
        <List> 
        { reviews.results.map(review => (
            <ListItem key={review.id}>
              <Title>
                <b>Author:</b> {review.author}
              </Title>
              <Descr>{review.content}</Descr>
            </ListItem>
          ))}
      </List>
    );
}