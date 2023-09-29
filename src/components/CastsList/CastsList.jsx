import { List, ListItem, WrapImg, Title, Descr } from './CastsList.styled';


export default function CastsList({ cast }) {
    
    return (
      <List>
        {cast &&
                cast.cast.map(cast => { 
                    const img = cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : 'https://fakeimg.pl/400x600';
                    return (
                      <ListItem key={cast.id}>
                        <WrapImg>
                          <img
                            src={img}
                            alt={cast.name}
                          />
                        </WrapImg>

                        <Title>{cast.name}</Title>
                        <Descr>{cast.character}</Descr>
                      </ListItem>
                    );
                })}
      </List>
    );
}