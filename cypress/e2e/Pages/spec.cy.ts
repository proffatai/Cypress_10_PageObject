import {HRMclass} from '../Pages/PageClass'

const pClass = new HRMclass();

  it('HRM website', () => {
    let url="https://opensource-demo.orangehrmlive.com/index.php/auth/login"
    let user="Admin"
    let pass="admin123"
    let myname="Joe Root"
    let myusername="proffata"
    let mypassword="fat_IBR123"


    pClass.navigate(url)
    pClass.Enterusername(user)
    pClass.Enterpassword(pass)
    pClass.subMit()
    pClass.Admin()
    pClass.AddButton()
    pClass.EmployeeName(myname)
    pClass.EmployeeUsername(myusername)
    pClass.EmployeePassword(mypassword)
    pClass.EmployeePasswordConfirm(mypassword)
    pClass.createEmp()
    pClass.successMessage()
  })
