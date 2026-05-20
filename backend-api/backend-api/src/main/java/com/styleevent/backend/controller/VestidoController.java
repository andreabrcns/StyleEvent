package com.styleevent.backend.controller;

import com.styleevent.backend.model.Vestido;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VestidoController {

    @GetMapping("/api/vestidos")
    public List<Vestido> obtenerVestidos() {

        return List.of(
                new Vestido(
                        "1",
                        "Vestido boda de día verde",
                        129.99,
                        "Boda de día",
                        "/assets/vestido2catalogobdn.png",
                        "Vestido elegante para bodas de día con un diseño fresco y sofisticado."),

                new Vestido(
                        "2",
                        "Vestido noche negro elegante",
                        189.99,
                        "Boda de noche",
                        "/assets/vestido3catalogobdd_g.png",
                        "Vestido negro elegante ideal para eventos y celebraciones nocturnas."));
    }
}
