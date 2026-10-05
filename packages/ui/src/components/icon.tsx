import {
  ArrowLeft,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  FileText,
  Mail,
  Phone,
  Percent,
  PhoneCall,
  TrendingUp,
  Search,
  ShieldCheck,
  UserCheck,
  X,
} from "lucide-react";

type TIcon =
  | "ArrowLeft"
  | "Award"
  | "Building2"
  | "Calendar"
  | "CheckCircle2"
  | "ChevronRight"
  | "Clock"
  | "DollarSign"
  | "FileText"
  | "Mail"
  | "Phone"
  | "Percent"
  | "PhoneCall"
  | "TrendingUp"
  | "Search"
  | "ShieldCheck"
  | "UserCheck"
  | "X";

export function Icon({ icon }: { icon: TIcon }) {
  switch (icon) {
    case "ArrowLeft":
      return <ArrowLeft />;
    case "Award":
      return <Award />;
    case "Building2":
      return <Building2 />;
    case "Calendar":
      return <Calendar />;
    case "CheckCircle2":
      return <CheckCircle2 />;
    case "ChevronRight":
      return <ChevronRight />;
    case "Clock":
      return <Clock />;
    case "DollarSign":
      return <DollarSign />;
    case "FileText":
      return <FileText />;
    case "Mail":
      return <Mail />;
    case "Percent":
      return <Percent />;
    case "Phone":
      return <Phone />;
    case "PhoneCall":
      return <PhoneCall />;
    case "Search":
      return <Search />;
    case "ShieldCheck":
      return <ShieldCheck />;
    case "TrendingUp":
      return <TrendingUp />;
    case "UserCheck":
      return <UserCheck />;
    case "X":
      return <X />;

    default:
      return null;
  }
}
