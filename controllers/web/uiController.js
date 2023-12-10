const uiController = { 
    home(req, res){ 
      return res.render('index')
    },

    about(req, res){ 
      return res.render('ui/about')
    }, 

    contact(req, res){ 
      return res.render('ui/contact'); 
    }, 

    appointment(req, res){ 
      return res.render('ui/appointment'); 
    },

    service(req, res){ 
      return res.render('ui/services'); 
    }
}

export default uiController; 