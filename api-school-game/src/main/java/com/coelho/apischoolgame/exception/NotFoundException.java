package com.coelho.apischoolgame.exception;

import lombok.EqualsAndHashCode;
import lombok.NonNull;
import org.springframework.http.HttpStatus;

@EqualsAndHashCode(callSuper = true)
public class NotFoundException extends BusinessException {

    public NotFoundException(@NonNull String key) {
        super(key, HttpStatus.NOT_FOUND);
    }

}
