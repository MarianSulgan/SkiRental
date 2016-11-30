# SkiRental

This is ski rental desktop application.

-------------------

##Data Schema

Application saves data needed for running ski rental business. So far examined and tested is this set of entities and attributes.


###Items
* Id (could be barcode or number or any unique identifier)
* Brand
* Type (brand series)
* Size
* Type of goods - skis/headwear/boots/poles (extendable)
* State (free/reserved or rented)

###Rentals
* Date from
* Date to
* Price
* Customer
* Items that are rented
* State (active/closed)
* Notes
    
###Customers
* Name
* Surname
* Phone number
* ID card number
* Address
* Notes

###Service item 
* Brand
* Type (brand series)
* Type - skis/snowboard
* Bottom edge angle
* Side edge angle
* Type of service action (mounting, waxing, etc.)

###Service
* Date from
* Date to
* Price
* Customer
* Items that are serviced
* Notes

-------------------

##Older version had several dependencies, here is list of them:

Node modules:
* https://www.npmjs.com/package/html-pdf
* https://www.npmjs.com/package/moment
* https://www.npmjs.com/package/moment-range
* https://www.npmjs.com/package/phantomjs

Other JavaScript libraries:
* http://getbootstrap.com/javascript/
* http://bootboxjs.com/
* https://bootstrap-datepicker.readthedocs.io/en/latest/
* https://vitalets.github.io/x-editable/
* https://vitalets.github.io/bootstrap-editable/
* https://github.com/wenzhixin/bootstrap-table
* http://www.bootstraptoggle.com/
* https://github.com/bassjobsen/Bootstrap-3-Typeahead
* https://kylestetz.github.io/CLNDR/
* http://plugins.krajee.com/file-input
* http://listjs.com/
* http://momentjs.com/
* http://underscorejs.org/
