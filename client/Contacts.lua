-- local my_contants = {}
local my_contacts = {
    test1 = 09013323112,
    test2 = 09013334445,
    test3 = 09022222222,
}
local my_phoneNumber = "09015524345"

RegisterCommand("mycon", function(source, args)
    print(json.encode(my_contacts))
end, false)

RegisterNUICallback("GetContactsCount", function(data, cb)
    local count = 0
    for _ in pairs(my_contacts) do 
        count = count + 1
    end
    cb(count)
end)
RegisterNUICallback("GetContacts", function(data, cb)
    local contantens = {}
    for k,v in pairs(my_contacts) do
        local con = {}
        con[k] = v 
        table.insert(contantens, con)
    end
    cb(contantens)
end)
RegisterNUICallback("GetMyPhoneNumber", function(data, cb)
    cb(my_phoneNumber)
end)

RegisterNUICallback("AddToContactRequest", function(data, cb)
    local newContact = data;
    table.insert(my_contacts,newContact)
    cb("successful")
  end)

RegisterNUICallback("GetEditedContacts", function(data, cb)
  local my_contacts = data;
  cb("successful")
end)