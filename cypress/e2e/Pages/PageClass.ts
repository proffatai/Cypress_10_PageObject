/// <reference types="cypress" />

export class HRMclass {
    
    admin="#menu_admin_viewAdminModule > b"
    add="[name=btnAdd]"
    name_id ="#systemUser_employeeName_empName"
    user_id="#systemUser_userName"
    pass_id="#systemUser_password"
    pass_idconfirm="#systemUser_confirmPassword"
    save_id="#btnSave"
    navigate(url: string){
        cy.visit (url)
    }
    Enterusername (name: string){
        cy.get('#txtUsername').type(name)
    }
    Enterpassword (pass: string){
        cy.get('#txtPassword').type(pass)
    }
    subMit(){
        cy.get('#btnLogin').click()
    }
    Admin (){
        cy.get(this.admin).click()
    }
    AddButton(){
        cy.get(this.add).click()
    }
    EmployeeName(name: string){
        cy.get(this.name_id).type(name)
    }
    EmployeeUsername(myusername: string){
        cy.get(this.user_id).type(myusername)
    }
    EmployeePassword(mypassword: string){
        cy.get(this.pass_id).type(mypassword)
    }
    EmployeePasswordConfirm(mypassword: string){
        cy.get(this.pass_idconfirm).type(mypassword)
    }
    createEmp(){
        cy.get(this.save_id).click()
    }
    successMessage(){
        cy.get('.message').should('contain','Successfully Saved')
    }
    
    }
