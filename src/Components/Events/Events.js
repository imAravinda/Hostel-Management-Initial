import {
        EventContainer,
        Event,
        ImageSection,
        Description,
        P
} from "./EventsStyle";
const Events = () => {

    return ( 
        <EventContainer>
            <Event>
                <ImageSection>
                    <img src=""/>
                </ImageSection>
                <Description>
                    <P>Lorem</P>
                </Description>
            </Event>
            <Event>
                <ImageSection>
                    <img src=""/>
                </ImageSection>
                <Description>
                    <P>Lorem</P>
                </Description>
            </Event>
            <Event>
                <ImageSection>
                    <img src=""/>
                </ImageSection>
                <Description>
                    <P>Lorem</P>
                </Description>
            </Event>
        </EventContainer>
     );
}
 
export default Events;