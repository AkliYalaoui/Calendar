/*global console,document*/
var
    $thisMonth = document.getElementById('thisMonth'),
    $calendar = document.getElementById('calendar'),

    $monthDay = new Date().getDate(), // return the day in the month
    $day = new Date().getDay(),      // return a number between 0-6
    $month = new Date().getMonth(),// return a number between 0-11
    $year = new Date().getFullYear(), // return the local year

    $days   = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    $months = ["januay", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// the cuurent $month
$thisMonth.innerHTML = $months[$month];
//the calendar of this month
function getIndexOFLastSundayOfMonth() {
    "use strict";
    var $index, $date, $stop = false, i, j;
    $date = new Date($year, $month, 1);
    if ($date.getDay() === 0) {
        $index = 0;
    } else {
        $date.setFullYear($year, $month, 0);
        i = $date.getDay();
        j = $date.getDate();
        while (!$stop) {
            if (i === 0) {
                $stop = true;
            }
            i = i - 1;
            j = j - 1;
            $date.setFullYear($year, $month, j);
        }
        $index = j + 1;
    }
    return $index;
}

(function getMonth() {
    "use strict";
    var $index,
        $start = getIndexOFLastSundayOfMonth(),
        $date = new Date(),
        text,
        div,
        dt;
    for ($index = $start; $index < $start + 35; $index = $index + 1) {
        $date.setFullYear($year, $month - 1, $index);
        dt = $date.getDate();
        text = document.createTextNode(dt);
        div = document.createElement("div");
        if ($date.getMonth() !== $month) {
            div.innerHTML = "<span style='color:#aaa'>" + dt + "</span>";
        } else if (dt === $monthDay) {
            div.style.background = "#d63031";
            div.style.color = "#fff";
            div.appendChild(text);
        } else {
            div.appendChild(text);
        }
        $calendar.appendChild(div);
    }
}());
