import { NgModule } from '@angular/core';
import {
  UtrechtArticle,
  UtrechtBadgeCounter,
  UtrechtBadgeData,
  UtrechtBadgeStatus,
  UtrechtBreadcrumb,
  UtrechtButton,
  UtrechtContactCardTemplate,
  UtrechtCheckbox,
  UtrechtDocument,
  UtrechtFormFieldCheckbox,
  UtrechtFormFieldDescription,
  UtrechtFormFieldTextarea,
  UtrechtFormFieldTextbox,
  UtrechtFormToggle,
  UtrechtHeading,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
  UtrechtHeading5,
  UtrechtHeading6,
  UtrechtHtmlContent,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
  UtrechtLogo,
  UtrechtPageFooter,
  UtrechtPagination,
  UtrechtParagraph,
  UtrechtSeparator,
  UtrechtSidenav,
  UtrechtTextbox,
} from './directives/proxies';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';

// This array is maintained manually, unfortunately

const components = [
  UtrechtArticle,
  UtrechtBadgeCounter,
  UtrechtBadgeData,
  UtrechtBadgeStatus,
  UtrechtBreadcrumb,
  UtrechtButton,
  UtrechtCheckbox,
  UtrechtContactCardTemplate,
  UtrechtDocument,
  UtrechtFormFieldCheckbox,
  UtrechtFormFieldDescription,
  UtrechtFormFieldTextarea,
  UtrechtFormFieldTextbox,
  UtrechtFormToggle,
  UtrechtHeading,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
  UtrechtHeading5,
  UtrechtHeading6,
  UtrechtHtmlContent,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
  UtrechtLogo,
  UtrechtPageFooter,
  UtrechtPagination,
  UtrechtParagraph,
  UtrechtSeparator,
  UtrechtSidenav,
  UtrechtTextbox,
];

const valueAcessors = [BooleanValueAccessor, NumericValueAccessor, SelectValueAccessor, TextValueAccessor];

@NgModule({
  declarations: [...components, ...valueAcessors],
  exports: [...components, ...valueAcessors],
  imports: [],
  providers: [],
})
export class UtrechtWebComponentsModule {}
