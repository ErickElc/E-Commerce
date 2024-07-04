import { SectionUl, SpanSection } from "../../../../styles/components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SectionInfos() {
  return (
    <SectionUl className="flex justify-between">
      <li className="mx-4 flex items-center">
        <PhoneIcon style={{ color: "red" }} />
        <SpanSection className="ml-2 self-center text-sm">
          (22)99942-2502
        </SpanSection>
      </li>
      <li className="mx-4 flex items-center">
        <EmailIcon style={{ color: "red" }} />
        <SpanSection className="ml-2 self-center text-sm">
          ericklucas@id.uff.br
        </SpanSection>
      </li>
      <li className="mx-4 flex items-center">
        <GitHubIcon style={{ color: "red", height: "20px" }} />
        <SpanSection className="ml-2 flex self-center text-sm">
          <a href="https://github.com/erickelc">Github</a>
        </SpanSection>
      </li>
    </SectionUl>
  );
}
