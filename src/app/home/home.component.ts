import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activePageDataChunk : string[] = [];

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activePageDataChunk.push(this.svg);
  }

  getSVGImage(image: any) {
    return this._sanitizer.bypassSecurityTrustHtml(`${image}`);
  }

  svg = `<svg xmlns="http://www.w3.org/2000/svg" 
  width="560px" height="400px" viewBox="0 0 866.80518 443.06433" 
  xmlns:xlink="http://www.w3.org/1999/xlink" style="user-select: auto;">
  <path d="M711.46549,396.38602H175.4178c-4.98192,0-9.03451-4.05259-9.03451-9.03451s4.05259-9.03451,9.03451-9.03451H711.
  46549c4.98192,0,9.03451,4.05259,9.03451,9.03451s-4.05259,9.03451-9.03451,9.03451Z" fill="#e6e6e6" style="user-select: auto;
  "/><path d="M592.51109,443.06433H294.3722c-4.98192,0-9.03451-4.05259-9.03451-9.03451s4.05259-9.03451,9.03451-9.03451h298.
  13888c4.98192,0,9.03451,4.05259,9.03451,9.03451s-4.05259,9.03451-9.03451,9.03451Z" fill="#e6e6e6" style="user-select: auto;
  "/><polygon points="235.06938 81.27476 268.85303 67.05703 283.34349 96.76248 247.84185 111.25294 235.06938 81.27476" 
  fill="#ffb6b6" style="user-select: auto;"/><polygon points="235.06938 81.27476 268.85303 67.05703 283.34349 96.76248 
  247.84185 111.25294 235.06938 81.27476" opacity=".1" style="user-select: auto;"/><path d="M239.8721,69.95512l33.32807,
  38.39973s-23.18474,73.17685-46.36949,79.69756-65.93162,38.39973-65.93162,38.39973l-53.61472-34.77712,26.08284-38.39973s63.
  03352-86.21827,79.69756-86.21827c16.66403,0,26.80736,2.89809,26.80736,2.89809Z" fill="#6c63ff" style="user-select: auto;"/>
  <path d="M194.84296,320.2779H117.26104l-4.90504-6.55697-20.02583-26.7711-4.60796-6.15845s-17.38856-31.87902-13.76594-60.8599
  5c3.62262-28.98093,41.29783-35.50164,41.29783-35.50164h1.55049l46.12313,40.52979-2.75318,37.71872,14.60637,24.27153,20.06205
  ,33.32807Z" fill="#2f2e41" style="user-select: auto;"/><polygon points="133.14983 320.2779 112.35601 320.2779 112.35601 289.
  48566 133.14983 320.2779" fill="#2f2e41" style="user-select: auto;"/><polygon points="704.74455 104.90134 712.5 153.2779 663
  .5 153.90985 663.5 111.85055 704.74455 104.90134" fill="#ffb6b6" style="user-select: auto;"/><polygon points="704.74455 104.
  90134 712.5 153.2779 663.5 153.90985 663.5 111.85055 704.74455 104.90134" opacity=".1" style="user-select: auto;"/><path d="
  M821.46138,273.53165l-2.58651,13.41818-6.41927,33.32807h-128.95789c1.00701-7.46988,2.38371-18.22178,3.85442-29.82865,.14496-
  1.15922,.29708-2.32569,.44195-3.49942,3.68789-29.17657,7.72344-62.19314,7.72344-62.19314l16.95386,2.05771,32.89328,3.98488,
  13.40368,1.62293,35.89291,4.35439c17.89569,2.16632,30.20533,19.04774,26.80011,36.75505Z" fill="#f2f2f2" style="user-select:
   auto;"/><path d="M581.64418,273.53165l-2.58651,13.41818-6.41927,33.32807h-128.95789c1.00701-7.46988,2.38371-18.22178,3.8544
   2-29.82865,.14496-1.15922,.29708-2.32569,.44195-3.49942,3.68789-29.17657,7.72344-62.19314,7.72344-62.19314l16.95386,2.05771
   ,32.89328,3.98488,13.40368,1.62293,35.89291,4.35439c17.89569,2.16632,30.20533,19.04774,26.80011,36.75505Z" fill="#f2f2f2" 
   style="user-select: auto;"/><path d="M764.14436,320.2779h-69.94541c1.06503-1.25341,1.66635-1.97793,1.66635-1.97793l20.96775
   -3.46324,43.20324-7.12937s1.97068,5.09342,4.10808,12.57055Z" fill="#2f2e41" style="user-select: auto;"/><path d="M667.92047
   ,320.2779h-105.62827c1.05052-2.08663,2.13731-4.18051,3.2531-6.26714,1.49256-2.7894,3.08648-5.27446,4.77467-7.48429,1.12296-
   1.4708,2.28218-2.81841,3.47766-4.05015,3.51392-3.61536,7.33942-6.2453,11.36782-8.04935,14.38168-6.47003,31.32838-2.50691,45
   .76082,3.94136,5.41942,2.41988,10.48383,5.18752,14.92525,7.88282,7.8248,4.75283,13.72968,9.28835,16.24375,11.30255,.86939,.
   68826,1.3331,1.08678,1.3331,1.08678l4.4921,1.63743Z" fill="#2f2e41" style="user-select: auto;"/><polygon points="584.12209 320.2779 569.13891 320.2779 573.08752 315.69161 575.31911 313.09785 576.27553 313.87305 584.12209 320.2779" fill="#ffb6b6" style="user-select: auto;"/><path d="M769.25944,320.2779h-129.02298l5.61506-14.02676,7.7161-19.30131,3.87627-9.69412-3.20251-13.62824s-1.57941-1.11579-3.98488-3.12274c-8.57099-7.10036-27.64774-25.38732-23.26434-44.16691,4.98464-21.37344,11.24462-63.02627,12.57037-72.00321,.16671-1.12296,.25365-1.73153,.25365-1.73153l18.62021-4.56453,.61592-.15212,1.99969-.49271h49.87607l36.6827,24.84393-.00725,.26082-2.23884,68.30082-.95633,29.21999s-1.15197,4.21669-.87673,10.7664c.18113,4.4921,1.02894,10.07814,3.37639,16.16416,2.48507,6.46994,6.66558,13.49787,13.52679,20.35909,5.18036,5.18036,7.69443,9.542,8.82464,12.96898Z" fill="#6c63ff" style="user-select: auto;"/><path d="M758.76836,232.42221c-1.2244,10.04188-2.39813,17.17842-2.39813,17.17842l-12.83862,21.18505-9.79548,16.16416-16.9031,27.88689-2.4779,4.09357-1.76788,1.3476h-53.02781l2.53583-2.72421,25.25687-27.10444,3.26761-3.49942,5.29622-5.68758,16.55543-54.44785,19.51136-64.17107s7.90457-2.75314,15.62076-.14487c4.05731,1.36936,8.07111,4.22403,10.83159,9.75931,5.2818,10.56361,2.70971,40.77619,.33325,60.16444Z" fill="#6c63ff" style="user-select: auto;"/><path d="M665.48599,230.66892l-15.22949,29.83582-13.49778,26.4451-5.83245,11.41849-2.29668,4.50651-19.68533,17.40306h-44.57268l7.34668-9.12906,2.73147-3.40522,10.71573-13.31665,6.01349-7.47713,16.32344-20.30116,4.35386-92.46236c.72213-15.33578,12.40681-27.73295,27.61481-29.83638,.0325-.0045,.06301-.0096,.09149-.01532,4.9413-.9925,12.79519-1.28233,18.87387,4.59354,.21014,.19564,.41303,.40578,.61592,.62308,1.02151,1.07953,1.98519,2.34745,2.86908,3.83267,.08694,.14496,.17388,.29717,.25357,.44929,.25357,.46362,.49997,.97084,.72452,1.51423,7.7597,18.06966,2.58651,75.3215,2.58651,75.3215Z" fill="#6c63ff" style="user-select: auto;"/><polygon points="467.45492 95.76626 497.87299 138.78423 444.81389 140.36878 439.1185 99.94198 467.45492 95.76626" fill="#a0616a" style="user-select: auto;"/><polygon points="467.45492 95.76626 497.87299 138.78423 444.81389 140.36878 439.1185 99.94198 467.45492 95.76626" opacity=".1" style="user-select: auto;"/><path id="uuid-b14ece9b-aa3d-4fe4-9d8a-4500bc16dcc4-250" d="M317.44598,184.89638c-3.90299-11.25913-12.8761-18.37174-20.04107-15.88668-7.16497,2.48507-9.80758,13.62542-5.90169,24.88804,1.49853,4.52036,4.05781,8.61612,7.46374,11.94459l17.13959,47.49655,22.1173-8.51819-19.24476-45.91882c.61482-4.72396,.08913-9.52647-1.53311-14.0055Z" fill="#a0616a" style="user-select: auto;"/><path d="M523.34728,162.97667l-.04173,43.84082-4.07898,16.19317-8.39004,33.30631-6.10768,30.63286-4.55003,22.82248-1.62293,8.15089c-1.22449,.81871-2.44173,1.60117-3.65888,2.3547h-105.97603c-6.02079-3.61536-9.38979-6.42652-9.38979-6.42652,0,0,1.66639-1.56499,3.57189-4.07907,3.21689-4.2457,7.10757-11.2011,4.72391-17.84501-.49992-1.39112-.63033-3.08648-.47821-4.97747,.97088-12.47627,14.05577-33.57447,14.05577-33.57447l-2.70971-31.31387-1.18823-13.72243,8.37769-66.9101,27.30728-15.87424,4.71449-.45614,46.53611-2.51407,19.23434,1.10845,.87664,.23915,18.79409,39.04457Z" fill="#ccc" style="user-select: auto;"/><g style="user-select: auto;"><polygon points="525.41394 320.2779 502.2292 320.2779 501.2076 309.77232 501.18584 309.56218 507.75006 309.11297 524.82713 307.9465 525.12412 314.23531 525.35601 319.06075 525.41394 320.2779" fill="#ffb6b6" style="user-select: auto;"/><path d="M531.12141,173.57645l9.73934,57.14315-7.948,56.23024-1.23891,8.75221-2.18807,15.45405-.67376,4.75291,.02176,.51438,.16663,3.85451h-27.53188l-1.01444-10.50559-.08685-.94192-2.07221-21.51831-.03617-.36226-4.39782-45.63046,8.62176-32.98031,.63767-2.42722v-.00716l3.75119-56.46939-2.90535-25.66256-.02892-.23915c.05793,.03626,.1087,.07252,.16663,.1087,.15221,.09419,.30433,.18838,.4492,.28983,16.92485,10.73748,27.01025,29.57509,26.56821,49.64435Z" fill="#ccc" style="user-select: auto;"/></g><path d="M415.74776,152.37881l-10.58745-10.95064s-22.66445,10.21757-23.79416,15.88619c-1.12971,5.66862-41.14649,88.92555-41.14649,88.92555l-17.40981-46.49871-22.66197,15.13029s18.1839,72.19186,35.18976,75.58099c17.00586,3.38913,74.00173-85.44603,74.00173-85.44603l6.40838-52.62764Z" fill="#ccc" style="user-select: auto;"/><circle cx="678.77617" cy="91.20582" r="35.2268" fill="#ffb6b6" style="user-select: auto;"/><path d="M693.38291,105.0554s-3.65152-10.06114-5.7222-15.28194c-2.07068-5.2208-.72048-11.99577-.72048-11.99577,0,0-27.6332-6.09946-38.45428-.05391-10.82108,6.04555-11.54897-24.36244-.56621-32.63841,0,0,2.94097,5.11141,1.79962,6.58093l-1.14136,1.46952s8.31092-17.57621,22.34501-18.45614c0,0,6.65176,5.30755,4.14485,7.05945-2.50691,1.75191,18.48278-9.90356,22.1343,.15758,0,0,13.38353,2.3844,10.77554,6.9556l.21974,3.15493s12.1299-1.25942,11.26538,7.33606c0,0-4.0804-.81319-6.69032,.92932-2.60992,1.74251,6.20819,10.005,6.20819,10.005,0,0,5.30005,34.43032-13.07972,44.34327,0,0,2.98122-15.66865-4.03438-13.10717-7.0156,2.56148-8.48368,3.54165-8.48368,3.54165Z" fill="#2f2e41" style="user-select: auto;"/><path d="M845.64111,328.7779H21.16406c-11.66992,0-21.16406-9.49414-21.16406-21.16406s9.49414-21.16406,21.16406-21.16406H845.64111c11.66992,0,21.16406,9.49414,21.16406,21.16406s-9.49414,21.16406-21.16406,21.16406Z" fill="#e6e6e6" style="user-select: auto;"/><path d="M518.52211,221.93974l-1.60291,74.80242c-.15517,7.24107-6.06962,13.03015-13.31236,13.03015h-137.60256c-7.07149,0-12.90955-5.52763-13.29556-12.58857l-4.08931-74.80242c-.41702-7.62814,5.65604-14.04226,13.29556-14.04226h143.29478c7.46556,0,13.4723,6.13683,13.31236,13.60068Z" fill="#3f3d56" style="user-select: auto;"/><path d="M817.52211,221.93974l-1.60291,74.80242c-.15517,7.24107-6.06962,13.03015-13.31236,13.03015h-137.60256c-7.07149,0-12.90955-5.52763-13.29556-12.58857l-4.08931-74.80242c-.41702-7.62814,5.65604-14.04226,13.29556-14.04226h143.29478c7.46556,0,13.4723,6.13683,13.31236,13.60068Z" fill="#3f3d56" style="user-select: auto;"/><circle cx="296.38476" cy="66.40952" r="32.92181" fill="#ffb6b6" style="user-select: auto;"/><polygon points="241.32114 152.55077 244.94376 191.67503 269.57755 290.93471 248.29566 298.39388 212.34021 190.22598 207.37409 146.75458 241.32114 152.55077" fill="#ffb6b6" style="user-select: auto;"/><path d="M231.52211,221.93974l-1.60291,74.80242c-.15517,7.24107-6.06962,13.03015-13.31236,13.03015H79.00427c-7.07149,0-12.90955-5.52763-13.29556-12.58857l-4.08931-74.80242c-.41702-7.62814,5.65604-14.04226,13.29556-14.04226H218.20974c7.46556,0,13.4723,6.13683,13.31236,13.60068Z" fill="#3f3d56" style="user-select: auto;"/><ellipse cx="273.5" cy="298.7779" rx="26" ry="11.5" fill="#ffb6b6" style="user-select: auto;"/><path d="M190.24225,158.53237l14.85273-79.15844s41.29783-5.79619,42.74687,7.96976-1.03544,81.04198-1.03544,81.04198l-56.56416-9.85329Z" fill="#6c63ff" style="user-select: auto;"/><path d="M283.09519,71.58597s20.36536-7.26838,28.95593-11.17911c8.59056-3.91073,25.65708,23.36637,26.03673,8.96042,.37965-14.40595-5.51755-20.44717-5.51755-20.44717,0,0-1.4726-31.51507-33.2233-27.57494,0,0,6.98375-15.76734-15.94076-18.20547-22.92451-2.43813-58.58934,52.92097-55.39531,61.19409,3.19403,8.27312,7.02295,15.11285-2.03888,23.95865-9.06183,8.8458-26.03033,58.76917-13.11998,72.20319,12.91035,13.43402,13.7575,19.26357,4.91188,27.62122-8.84562,8.35765-29.75425,26.53032-7.14719,29.68515,22.60706,3.15483-2.06828,.79851,14.7856-14.0263,16.85389-14.82481,41.44742-14.21933,32.26457-38.00455-9.18284-23.78522,6.77112-57.86925,4.77485-63.03995-1.99627-5.1707,4.4726-38.00496,4.4726-38.00496,0,0,15.05504-2.21189,16.1808,6.85974Z" fill="#2f2e41" style="user-select: auto;"/><g style="user-select: auto;"><circle cx="451.19101" cy="75.49881" r="35.83777" fill="#a0616a" style="user-select: auto;"/><path d="M454.05118,27.31743c-1.037,.60534-2.42604-.31053-2.75855-1.46432-.33251-1.1538,.05482-2.37882,.43892-3.51648l1.93363-5.72716c1.37137-4.06183,2.82687-8.26559,5.79693-11.35717,4.48283-4.66624,11.6071-5.85331,18.02037-4.99332,8.2359,1.1044,16.36189,5.56405,20.19135,12.93866,3.82945,7.37462,2.19911,17.66485-4.72046,22.26586,9.8619,11.30338,13.2996,23.9006,12.7568,38.89155-.5428,14.99095-16.87927,28.78752-27.53282,39.34806-2.37913-1.4422-4.54204-8.20095-3.23373-10.65626,1.3083-2.45531-.5662-5.29986,1.05409-7.56146,1.62029-2.2616,2.97587,1.33954,1.33779-.90922-1.03366-1.41901,3.00067-4.68353,1.46421-5.53283-7.43161-4.10794-9.9033-13.37111-14.57083-20.46464-5.62991-8.55611-15.26549-14.35039-25.46249-15.31167-5.61717-.52953-11.55014,.42955-16.15432,3.69062-4.60418,3.26106-7.5849,9.08853-6.51724,14.62867-2.76507-2.80756-4.14147-6.92204-3.62233-10.82826,.51914-3.90621,2.92243-7.51837,6.32483-9.50626-2.06881-6.84142-.29652-14.71105,4.50527-20.00518,4.80179-5.29413,24.28048-4.39244,31.29074-2.99911l-.54217-.93008Z" fill="#2f2e41" style="user-select: auto;"/><path d="M455.13984,53.47472c9.28487,1.0023,15.9888,9.04506,21.64971,16.47254,3.26282,4.28103,6.68059,9.00871,6.59868,14.39076-.08282,5.4414-3.72095,10.10859-5.45967,15.26538-2.84199,8.42894-.07214,18.45744,6.69308,24.23289-6.68479,1.26852-13.91123-3.74373-15.06525-10.44924-1.34341-7.80603,4.57394-15.34005,3.87313-23.22978-.61741-6.95094-6.09506-12.30052-10.75187-17.49772-4.65681-5.19721-9.03036-12.09377-6.88799-18.73508l-.64983-.44975Z" fill="#2f2e41" style="user-select: auto;"/></g>
   </svg>`;

}