function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester(){
    let semesterId = document.getElementById("semesterList");
    let option = document.getElementById("option");

    option.value = 0;
    option.text = "Select a Semester";
    semesterId.add(option)

    for (x = 0; x < arySemesters.length; x ++ ){
        option = document.getElementById("option");
        option.value = arySemesters[x][0];
        option.text = arySemesters[x][1];
        semesterId.add(option);

    }
}

function getClass(objSemester){
    let semesterId = objSemester.objSemesters[objSemester.selectedIndex].value;
    let anyClasses = eval('ary$(semesterId)');
    let classId = document.getElementById('classLisr');
    let option = document.createElement('option');

    for (x = 0; x < aryClasses.length; x ++ ){
        option = document.creatElement("option");
        option.value = arySemesters[x][0];
        option.text = arySemesters[x][1];
        semesterId.add(option);

    }

}