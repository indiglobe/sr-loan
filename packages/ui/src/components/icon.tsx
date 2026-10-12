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
  BadgeCheck,
  BadgeIndianRupee,
  BriefcaseBusiness,
  CalendarDays,
  CarFront,
  FileCheck,
  House,
  IdCard,
  MapPin,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ICON_ENUM } from "@repo/utils/enums/db-enums";
import { ComponentProps } from "react";

export function Icon({
  icon,
  ...props
}: ComponentProps<LucideIcon> & { icon: (typeof ICON_ENUM)[number] }) {
  switch (icon) {
    case "ArrowLeft":
      return <ArrowLeft {...props} />;
    case "Award":
      return <Award {...props} />;
    case "BadgeCheck":
      return <BadgeCheck {...props} />;
    case "BadgeIndianRupee":
      return <BadgeIndianRupee {...props} />;
    case "BriefcaseBusiness":
      return <BriefcaseBusiness {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Calendar":
      return <Calendar {...props} />;
    case "CalendarDays":
      return <CalendarDays {...props} />;
    case "CarFront":
      return <CarFront {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    case "ChevronRight":
      return <ChevronRight {...props} />;
    case "Clock":
      return <Clock {...props} />;
    case "DollarSign":
      return <DollarSign {...props} />;
    case "FileCheck":
      return <FileCheck {...props} />;
    case "FileText":
      return <FileText {...props} />;
    case "House":
      return <House {...props} />;
    case "IdCard":
      return <IdCard {...props} />;
    case "Mail":
      return <Mail {...props} />;
    case "MapPin":
      return <MapPin {...props} />;
    case "Percent":
      return <Percent {...props} />;
    case "Phone":
      return <Phone {...props} />;
    case "PhoneCall":
      return <PhoneCall {...props} />;
    case "Search":
      return <Search {...props} />;
    case "ShieldCheck":
      return <ShieldCheck {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "UserCheck":
      return <UserCheck {...props} />;
    case "X":
      return <X {...props} />;
    case "Zap":
      return <Zap {...props} />;

    default:
      return null;
  }
}
