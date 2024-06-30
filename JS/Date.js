function holiday(date,name){
    this.date=date;
    this.name=name;
}

var event=new Array();
event[0] = new holiday("January 1","New Year's Day");
event[1] = new holiday("January 21","MLK Holiday");
event[2] = new holiday("February 2","Ground Hog Day");
event[3] = new holiday("February 14","Valentine's Day");
event[4] = new holiday("February 18","President's Day");
event[5] = new holiday("March 17","<FONT COLOR=lightgreen>St. Patrick's Day</FONT>");
event[6] = new holiday("March 20","SPRING!!!!!");
event[7] = new holiday("March 31","Easter");
event[8] = new holiday("April 1","April Fool's Day");
event[9] = new holiday("April 26","National Arbor Day");
event[10] = new holiday("May 12","Mother's Day");
event[11] = new holiday("May 27","Memorial Day<BR><FONT SIZE=-1>Remember those who gave the ultimate sacrifice</FONT>");
event[12] = new holiday("June 14","Flag Day");
event[13] = new holiday("June 21","SUMMER!!!!");
event[14] = new holiday("July 4","Independence Day<BR>Happy Birthday USA");
event[15] = new holiday("September 2","Labor Day");
event[16] = new holiday("September 22","AUTUMN!!!");
event[17] = new holiday("October 13","Columbus Day");
event[18] = new holiday("October 31","<BR><FONT SIZE=6 COLOR=orange>HALLOWEEN!!</FONT>");
event[19] = new holiday("November 11","Veterans Day");
event[20] = new holiday("November 27","THANKSGIVING!");
event[21] = new holiday("December 21","WINTER!!<BR>burrrrrrrrrr for the next 3 months");
event[22] = new holiday("December 25","<BR><FONT SIZE=6 COLOR=gold>CHRISTMAS!!</FONT>");
event[23] = new holiday("December 31","New Year's Eve!");

var today = new Date();
var this_day = today.getDate();
var this_month = today.getMonth();
var this_year = today.getYear();
if (this_year < 2000){this_year += 1900}

mnth=new Array('January','February','March','April','May','June','July','August','September','October','November','December')

function date(){
    var daystil = -1;
    var i = 0;
    document.write("<TABLE WIDTH='100%' BORDER=0 CELLPADDING=4 CELLSPACING=0 BGCOLOR=#990000 BACKGROUND=gimages/redbg1.gif><TR><TD ALIGN=center><B><FONT SIZE=6 COLOR=white>Today is "+this_day +" "+mnth[this_month]+"</FONT><BR>");
    document.write("<FONT SIZE=4 COLOR=lightblue>");
    while (daystil<0 && i<event.length){
        daystil = new Date(event[i].date+", "+this_year); 
        daystil = (daystil.getTime() - today.getTime()) / 86400000;
        daystil = Math.floor(daystil)+1;
        ev = event[i].name;
        i++;
    }
    if (daystil == 1){document.write("Tomorrow is ");}
    else if (daystil == 0){document.write("Today is ");}
    else if (daystil < 0){document.write(" ");}
    else {document.write(""+ daystil + " days until ");}
    document.write(ev+"</TD></TR></TABLE>");
}
