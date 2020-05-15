package com.coelho.apischoolgame.exception;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NonNull;
import org.springframework.http.HttpStatus;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
public class BusinessException extends RuntimeException {

    private final String key;

    private final HttpStatus httpStatus;

    public BusinessException(@NonNull String key) {
        super(key);
        this.key = key;
        this.httpStatus = HttpStatus.BAD_REQUEST;
    }

    public BusinessException(@NonNull String key, HttpStatus httpStatus) {
        super(key);
        this.key = key;
        this.httpStatus = httpStatus;
    }

}
