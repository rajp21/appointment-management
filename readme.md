# APPLICATION LAYOUT



1. user 

    full name 
    age 
    phone no  
    emailId 
    address
    height 
    weight
    gender
    password 


2. Sale packages

    Package Name
    Price 
    advance_amount 
    features
    session duration 
    doctor - default  NULL

3. Pain's and questionary 

    Health_problem 
    questions for perticular Pain


4. doctors 

    doctor name
    doctors available timing 
    doctors Breaks
    isAvaiable
    isDeleted

5. Slot's & sessions 

    - usreId 
    - doctorId    - 
    - session info: { 
        plan, 
        advance amount, 
        session time 
        question's answers
    }
    - payment: { 
        -- sessionid 
        -- total Amount
        -- paymentMode
        -- Advance Payment
        -- full Payment
        }
