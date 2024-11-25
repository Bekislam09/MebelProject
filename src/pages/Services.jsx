import Contacts from "../components/Contacts/Contacts";
import { Description } from "../components/ServicesPage/Description/Description";
import { HowWeWork } from "../components/ServicesPage/HowWeWork/HowWeWork";

export const Services = () => {
    return (
        <div>
            <Description />
            <HowWeWork />
            <Contacts />
        </div>
    );
}

