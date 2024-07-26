package com.presignedurl.backend.controller

import com.presignedurl.backend.model.ResponseDemo
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class TestController (

) {
    @GetMapping("demo")
    fun getAllImages ():ResponseDemo {
        return ResponseDemo(
            message = "Kotlinのバックエンドサーバーからのレスポンス"
        )
    }
}