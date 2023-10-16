<?php

namespace Tests\Feature;

use App\Mail\SendForm;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

use function PHPUnit\Framework\exactly;

class SendMailTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_user_can_sent_email(): void
    {
        Mail::fake();
        $data=[
            'subject'=> 'website',
            'message'=>'Make my website, please.',
            'tel'=>'+48 730 977 004',
            'email'=>'meeeczarnia@gmail.com'
        ];
        $response = $this->post('/send/mail',$data);
        error_log(json_encode($response));
        $response->assertStatus(302);

        $response->assertSessionHas('message',[
            'title'=>'Sukces',
            'message'=>'E-mail został wysłany.',
            'success'=>'true'
        ]);
        Mail::assertSent(SendForm::class);
    }
    public function test_validation_works():void
    {
        $response = $this->post('/send/mail',[]);

        $response->assertStatus(302);
        $response->assertInvalid(['tel'=>'The tel field is required.',
        'email'=>'The email field is required.',
        'message'=>'The message field is required.',
        'subject'=>'The subject field is required.']);
    }
}
