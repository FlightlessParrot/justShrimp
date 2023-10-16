<!DOCTYPE html>
<html>
    <head>
    <link rel="stylesheet" href="{{URL::asset('mail/css/mail.css')}}">
    </head>
    <body >
      <div id='main'>
        <h1>Treść wiadomości</h1>
        <p>{{$data['message']}}</p>
      </div>
      <div>
       <h2>Dane kontaktowe</h2>
        <a href='mailto:{{$data['email']}}'>{{$data['email']}}</a>
        <a href='tel:{{$data['tel']}}'>{{$data['tel']}}</a>
     
      </div>
    </body>
</html>
