import {Section} from './Section.model';
import {Auditory} from './Auditory.model';

export class Faculty {
  Id: string;
  Name: string;
  TotalSquare: number;
  Logo: string;
  Email: string;
  Phone: string;
  WebSite: string;
  Sections: Section[];
  Auditories: Auditory[];
}
