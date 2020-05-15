package com.coelho.apischoolgame.exception;

public class Errors {

    private Errors() {
        // Do nothing
    }

    // 422
    public static final String INVALID_API_ID = "422.01";

    public static final String INVALID_URI = "422.02";

    public static final String INVALID_METHOD = "422.03";

    public static final String INVALID_HEADERS = "422.04";

    public static final String INVALID_STATUS = "422.05";

    public static final String INVALID_BODY = "422.06";

    public static final String INVALID_TYPE = "422.07";


    // 404
    public static final String REQUEST_NOT_FOUND = "404.01";

}
